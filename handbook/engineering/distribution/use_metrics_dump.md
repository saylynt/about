# How to use a metrics dump

The two important things are to run the `prometheus` binary with the flag `--storage.tsdb.path` pointing at the snapshot and
to use the same version of Sourcegraph as the origin of the snapshot.

## Flag `--storage.tsdb.path` pointing at the snapshot

Two ways to achieve this:

* set the flag value
* move the snapshot to where the flag currently points

Depending on deployment and dev environment, choose whichever is easier. For example in an `enterprise/dev/start.sh` or
`dev/start.sh` case it is probably easy to just copy or move the snapshot directory to the location
 `~/.sourcegraph-dev/data/prometheus` (the snapshot directory itself will be `~/.sourcegraph-dev/data/prometheus`, not a
 subdir of it).
 