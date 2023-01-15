<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <a href="" data-toggle="modal" data-target="#ModalAdd" class="d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Tambah</a>
</div>
<?php $this->view('messages') ?>
<!-- DataTales Example -->
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold">Data Portfolio</h6>

    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Picture</th>
                        <th>Kategori</th>
                        <th>Keterangan</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $no = 1;
                    foreach ($portfolio as $r => $data) { ?>
                        <tr>
                            <td width="35px"><?= $no++ ?>.</td>
                            <td> <?= $data->name ?> </td>
                            <td><img src="<?= base_url('assets/images/portfolio/') ?><?= $data->picture ?>" alt="" style="width:100px; height:100px"></td>
                            <td> <?= $data->cat_name ?> </td>
                            <td> <?= $data->description ?> </td>
                            <td class="text-center" width="160px">
                                <form>
                                    <a class="btn btn-xs btn-primary" href="#ModalEdit<?= $data->port_id ?>" data-toggle="modal" title="Edit"><i class="fa fa-edit"> </i>Edit </a>
                                    <a class="btn btn-xs btn-danger" href="#ModalHapus<?= $data->port_id ?>" data-toggle="modal" title="Hapus"><i class="fa fa-close"></i> Hapus</a>
                                </form>
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </div>

    <!-- MODAL ADD -->
    <div class="modal fade" id="ModalAdd" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="formModalLabel">Tambah Portfolio</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" action="<?= base_url('master/addPortfolio') ?>" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="name">Nama </label>
                            <input type="text" class="form-control" id="name" name="name" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="category_id">Kategori</label>
                            <select name="category_id" id="category_id" class="form-control" required>
                                <option value="">- Pilih -</option>
                                <?php foreach ($category as $key => $data) { ?>
                                    <option value="<?= $data->cat_id ?>"><?= $data->cat_name ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="picture">Picture </label>
                            <input type="file" class="form-control" id="picture" name="picture" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="description">Keterangan </label>
                            <textarea type="text" class="form-control" id="description" name="description" autocomplete="off"> </textarea>
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-primary" id="btn_simpan"> Simpan</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--END MODAL ADD-->
    <!-- MODAL eDIT -->
    <?php foreach ($portfolio as $data) { ?>
        <div class="modal fade" id="ModalEdit<?= $data->port_id ?>" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="formModalLabel">Edit Portfolio</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="<?= base_url('master/edit_portfolio') ?>" enctype="multipart/form-data">
                            <input type="hidden" name="port_id" value="<?= $data->port_id ?>" class="form-control">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name" value="<?= $data->name ?>" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="picture">Picture</label>
                                <input type="file" class="form-control" id="picture" name="picture" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea type="text" class="form-control" id="description" name="description" autocomplete="off"><?= $data->description ?> </textarea>
                            </div>
                            <div class="form-group">
                                <label for="category_id">Kategori</label>
                                <select name="category_id" id="category_id" class="form-control" required>
                                    <option value="<?= $data->category_id ?>"><?= $data->cat_name ?></option>
                                    <?php foreach ($category as $key => $data) { ?>
                                        <option value="<?= $data->cat_id ?>"><?= $data->cat_name ?></option>
                                    <?php } ?>
                                </select>
                            </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button class="btn btn-primary"> Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <!--END MODAL eDIT-->
    <!-- MODAL Hapus -->
    <?php foreach ($portfolio as $data) { ?>
        <div class="modal fade" id="ModalHapus<?= $data->port_id ?>" tabindex="-1" role="dialog" aria-labelledby="demoModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="formModalLabel">Hapus Artikel</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="<?= base_url('master/del_portfolio') ?>" enctype="multipart/form-data">
                            <input type="hidden" name="port_id" value="<?= $data->port_id ?>" class="form-control">
                            Apakah anda yakin akan hapus <?= $data->name ?> ?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button class="btn btn-primary"> Hapus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <!--END MODAL Hapus-->