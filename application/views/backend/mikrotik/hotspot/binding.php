<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold">IP Binding</h6>
        <span style="color: red;"> <?php $router = $this->db->get('router')->row_array(); ?>
            <?= $router['alias']; ?></span>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr style="text-align: center">
                        <th style="text-align: center; width:20px"><?= count($hotspotbinding) ?></th>
                        <th>Name</th>
                        <th>MAC Address</th>
                        <th>Address</th>
                        <th>To Address</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>

                    <?php

                    foreach ($hotspotbinding as $key => $data) { ?>
                        <tr style="font-size:12; font-weight: 200;">
                            <th>
                                <!-- <?php if ($data['disabled'] == 'true') { ?><i class="fa fa-lock"></i> <?php } ?>
                                <?php if ($data['disabled'] != 'true') { ?><i class="fa fa-unlock"></i> <?php } ?>
                                <a href="<?= site_url('mikrotik/delhotspotbinding/' . $data['mac-address']) ?>" id="username" data-username="<?= $data['mac-address'] ?>" style="color: red;"><i class="fa fa-trash"></i></a> -->
                            </th>
                            <th><?= $data['comment']; ?></th>

                            <th><?= $data['mac-address']; ?></th>
                            <th><?= $data['address']; ?></th>
                            <th><?= $data['to-address']; ?></th>
                            <th><?= $data['type']; ?></th>


                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).on('click', '#username', function() {
        var mac = $(this).data('username');
        var x = confirm("Are you sure you want to delete binding mac " + mac + " ?");
        if (x)
            return true;
        else
            return false;

    })
</script>
<script>
    setTimeout(function() {
        window.location.reload(1);
    }, 60000);
</script>

<?php ini_set('display_errors', 'off');  ?>