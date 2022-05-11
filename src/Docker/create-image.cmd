docker build --no-cache -f SQL\Dockerfile.PostgreSql -t forms/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t forms/app ../..
