<?php

/**
 * InvoiceExample.php
 * php version 7.2.0
 *
 * @category Example
 * @package  Xendit/Examples
 * @author   Ellen <ellen@xendit.co>
 * @license  https://opensource.org/licenses/MIT MIT License
 * @link     https://api.xendit.co
 */

use Xendit\Xendit;

require 'vendor/autoload.php';

Xendit::setApiKey('SECRET_API_KEY');

$params = ['external_id' => 'demo_147580196270',
    'payer_email' => 'sample_email@xendit.co',
    'description' => 'Trip to Bali',
    'amount' => 32000
];

$createInvoice = \Xendit\Invoice::create($params);
var_dump($createInvoice);

$id = $createInvoice['id'];

$getInvoice = \Xendit\Invoice::retrieve($id);
var_dump($getInvoice);

$expireInvoice = \Xendit\Invoice::expireInvoice($id);
var_dump($expireInvoice);

$getAllInvoice = \Xendit\Invoice::retrieveAll();
var_dump(($getAllInvoice));
