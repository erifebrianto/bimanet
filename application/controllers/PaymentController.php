<?php
class PaymentController extends CI_Controller {
    public function __construct() {
        parent::__construct();
        $this->load->model('Payment_model');
    }

    public function unpaidThisMonth() {
        $data['total_belum_bayar_bulan_ini'] = $this->Payment_model->unpaidThisMonth();

        // Load view untuk menampilkan hasil
        $this->load->view('dashboard', $data);
    }
}
