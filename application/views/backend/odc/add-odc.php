<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>



<style>
    #map-canvas {

        width: 100%;

        height: 400px;

        border: solid #999 1px;

    }



    select {

        width: 240px;

    }



    #kab_box,

    #kec_box,

    #kel_box,



    #lat_box,

    #lng_box {

        display: none;

    }



    #mapid {

        height: 500px;

    }



    #map {

        /* width: 600px; */

        height: 500px;

    }
</style>

<div class="row">



    <div class="col-lg-6">

        <div class="card shadow mb-4">

            <div class="card-header py-3">

                <h6 class="m-0 font-weight-bold"><?= $title; ?></h6>

            </div>

            <?php echo form_open_multipart('') ?>

            <div class="card-body">

                <div class="form-group">

                    <label for="name">Kode ODC</label>

                    <input type="text" class="form-control" id="code_odc" name="code_odc" autocomplete="off">

                    <?= form_error('code_odc', '<small class="text-danger pl-3 ">', '</small>') ?>

                </div>

                <div class="form-group">

                    <label for="">Wilayah ODC</label>

                    <select name="coverage_odc" class="form-control select2" style="width: 100%;" required>

                        <option value="">-Pilih-</option>

                        <?php foreach ($coverage as $data) { ?>

                            <option value="<?= $data->coverage_id ?>"><?= $data->code_area ?> - <?= $data->c_name ?></option>

                        <?php } ?>

                    </select>

                </div>

                <div class="form-group">

                    <label for="">Nomor Port OLT</label>

                    <input type="number" class="form-control" name="no_port_olt" autocomplete="off">

                </div>

                <div class="form-group">

                    <label for="">Warna Tube FO</label>

                    <input type="text" class="form-control" name="color_tube_fo" autocomplete="off">

                </div>

                <div class="form-group">

                    <label for="">Nomor Tiang</label>

                    <input type="text" class="form-control" name="no_pole" autocomplete="off">

                </div>

                <div class="form-group">

                    <label for="">Jumlah Port</label>

                    <input type="number" class="form-control" name="total_port" autocomplete="off">

                </div>

                <div class="form-group">

                    <label for="picture">Document</label>

                    <input type="file" class="form-control" id="picture" name="picture" autocomplete="off">

                </div>



                <div class="form-group">

                    <label for="remark">Description</label>

                    <textarea type="text" class="form-control" id="remark" name="remark" autocomplete="off"> </textarea>

                </div>



                <div class="modal-footer">

                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Reset</button>

                    <button type="submit" class="btn btn-primary">Save</button>

                </div>

                <?php echo form_close() ?>

            </div>

        </div>

    </div>



    <div class="col-lg-6">



        <div class="row">



            <div class="col-lg-12">

                <div id="mapid"></div>

            </div>



        </div>

    </div>

</div>

<script>
    $(function() {

        //Initialize Select2 Elements

        $('.select2').select2()

    });
</script>









<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->