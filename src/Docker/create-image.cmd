docker build --no-cache -f SQL\Dockerfile.PostgreSql -t osipovae/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t osipovae/app ../..
