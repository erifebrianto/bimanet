<?php defined('BASEPATH') or exit('No direct script access allowed');

class Services_m extends CI_Model
{

    public function getServices($no_services = null)
    {
        $this->db->select('*, package_item.name as item_name,package_item.description as descriptionItem, package_category.name as category_name, services.price as services_price');
        $this->db->from('services');
        $this->db->join('package_item', 'package_item.p_item_id = services.item_id');
        $this->db->join('package_category', 'package_category.p_category_id = services.category_id');
        if ($no_services != null) {
            $this->db->where('no_services', $no_services);
        }
        $query = $this->db->get();
        return $query;
    }
    public function cekdoubleitem($no_services = null, $item)
    {
        $this->db->select('*, package_item.name as item_name, package_category.name as category_name, services.price as services_price');
        $this->db->from('services');
        $this->db->join('package_item', 'package_item.p_item_id = services.item_id');
        $this->db->join('package_category', 'package_category.p_category_id = services.category_id');
        if ($no_services != null) {
            $this->db->where('no_services', $no_services);
            $this->db->where('item_id', $item);
        }
        $query = $this->db->get();
        return $query;
    }
    public function getServicesActive($no_services = null)
    {
        $this->db->select('*, package_item.name as item_name, package_category.name as category_name, services.price as services_price');
        $this->db->from('services');
        $this->db->join('customer', 'customer.no_services = services.no_services');
        $this->db->join('package_item', 'package_item.p_item_id = services.item_id');
        $this->db->join('package_category', 'package_category.p_category_id = services.category_id');
        if ($no_services != null) {
            $this->db->where('no_services', $no_services);
        }
        $this->db->where('c_status', 'Aktif');
        $query = $this->db->get();
        return $query;
    }
    public function getServicesActiveSelected($noservices = null)
    {
        $this->db->select('*, package_item.name as item_name, package_category.name as category_name, services.price as services_price');
        $this->db->from('services');
        $this->db->join('customer', 'customer.no_services = services.no_services');
        $this->db->join('package_item', 'package_item.p_item_id = services.item_id');
        $this->db->join('package_category', 'package_category.p_category_id = services.category_id');
        if ($noservices != null) {
            $this->db->where_in('customer.no_services', $noservices);
        }
        $this->db->where('c_status', 'Aktif');
        $query = $this->db->get();
        return $query;
    }
    public function cekItem($p_item_id = null)
    {
        $this->db->select('*');
        $this->db->from('services');
        if ($p_item_id != null) {
            $this->db->where('item_id', $p_item_id);
        }
        $query = $this->db->get();
        return $query;
    }
    public function getServicesDetail($no_services = null)
    {
        $this->db->select('*, package_item.name as item_name, package_category.name as category_name, services.price as services_price');
        $this->db->from('services');
        $this->db->join('package_item', 'package_item.p_item_id = services.item_id');
        $this->db->join('package_category', 'package_category.p_category_id = services.category_id');
        if ($no_services != null) {
            $this->db->where('no_services', $no_services);
        }
        $this->db->where('no_services', $no_services);
        $query = $this->db->get();
        return $query;
    }
    public function getCekBill($no_services, $month, $year)
    {
        $this->db->select('*');
        $this->db->from('invoice');
        $this->db->where('no_services', $no_services);
        $this->db->where('month', $month);
        $this->db->where('year', $year);
        $query = $this->db->get();
        return $query;
    }

    public function add($post)
    {
        $params = [
            'no_services' => $post['no_services'],
            'price' => $post['price'],
            'qty' => $post['qty'],
            'disc' => 0,
            'category_id' => $post['category_id'],
            'item_id' => $post['item_id'],
            'total' => $post['qty'] * $post['price'],
            'services_create' => time()
        ];
        $this->db->insert('services', $params);
    }
    public function edit($post)
    {
        $params = [
            'remark' => htmlspecialchars($post['remark']),
            'price' => $post['price'],
            'item_id' => $post['paket'],
            'qty' => $post['qty'],
            'category_id' => $post['category'],
            'disc' => $post['disc'],
            'total' => ($post['qty'] * $post['price']) - $post['disc'],
        ];
        $this->db->where('services_id', $post['services_id']);
        $this->db->update('services', $params);
    }

    public function delete($services_id)
    {
        $this->db->where('services_id', $services_id);
        $this->db->delete('services');
    }
    public function importfromexcel($data2)
    {
        $this->db->insert_batch('services', $data2);
    }
}
