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
                <input type="hidden" name="coverage_id" id="coverage_id" class="form-control" autocapitalize="off" value="<?= $coverage['coverage_id'] ?>">
                <div class="form-group">
                    <label for="name">Code Area</label>
                    <input type="number" name="code_area" id="code_area" class="form-control" autocapitalize="off" value="<?= set_value('code_area') ?>">
                    <?= form_error('code_area', '<small class="text-danger pl-3 ">', '</small>') ?>
                </div>

                <div class="form-group">
                    <label for="public">Tampilkan di halaman Register</label>
                    <select name="public" class="form-control" id="public" required>
                        <option value="">-Pilih-</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="name">Nama Area</label>
                    <input type="text" name="name" id="name" class="form-control" autocapitalize="off" value="<?= set_value('name') ?>">
                    <?= form_error('name', '<small class="text-danger pl-3 ">', '</small>') ?>
                </div>
                <div class="form-group">
                    <label for="address">Alamat</label>
                    <input type="text" name="address" id="address" class="form-control" autocapitalize="off" value="">
                </div>

                <div class="form-group">
                    <label for="comment">Keterangan</label>
                    <input type="text" name="comment" id="comment" class="form-control" autocapitalize="off" autocomplete="off" value="">
                </div>



                <div class="form-group">

                    <label for="radius">Radius</label>

                    <div class="input-group mb-3">
                        <input type="number" id="radius" name="radius" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-text">Meter</span>
                        </div>
                    </div>


                </div>

                <div class="modal-footer">
                    <button type="reset" class="btn btn-secondary" data-dismiss="modal">Reset</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
                <?php echo form_close() ?>
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