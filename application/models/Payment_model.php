<?php
class Payment_model extends CI_Model {
    public function unpaidThisMonth() {
        $bulan_ini = date('Y-m');
        $this->db->select_sum('amount');
        $this->db->where('status', 'BELUM BAYAR');
        $this->db->like('inv_due_date', $bulan_ini, 'after');
        $query = $this->db->get('invoice');

        if (!$query) {
            $error = $this->db->error();
            die("Query error: " . $error['message']);
        }

        $row = $query->row_array();
        return isset($row['amount']) ? $row['amount'] : 0;
    }
    public function unpaidLastMonth() {
        $bulan_kemarin = date('Y-m', strtotime('-1 month'));
        $this->db->select_sum('amount');
        $this->db->where('status', 'BELUM BAYAR');
        $this->db->like('inv_due_date', $bulan_kemarin, 'after');
        $query = $this->db->get('invoice');

        if (!$query) {
            $error = $this->db->error();
            die("Query error: " . $error['message']);
        }

        $row = $query->row_array();
        return isset($row['amount']) ? $row['amount'] : 0;
    }
}
