// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get previousAdmin(): Bytes {
    let value = this.get("previousAdmin");
    return value!.toBytes();
  }

  set previousAdmin(value: Bytes) {
    this.set("previousAdmin", Value.fromBytes(value));
  }

  get newAdmin(): Bytes {
    let value = this.get("newAdmin");
    return value!.toBytes();
  }

  set newAdmin(value: Bytes) {
    this.set("newAdmin", Value.fromBytes(value));
  }
}

export class lpAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save lpAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type lpAdminChanged must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("lpAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): lpAdminChanged | null {
    return changetype<lpAdminChanged | null>(store.get("lpAdminChanged", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousAdmin(): Bytes {
    let value = this.get("previousAdmin");
    return value!.toBytes();
  }

  set previousAdmin(value: Bytes) {
    this.set("previousAdmin", Value.fromBytes(value));
  }

  get newAdmin(): Bytes {
    let value = this.get("newAdmin");
    return value!.toBytes();
  }

  set newAdmin(value: Bytes) {
    this.set("newAdmin", Value.fromBytes(value));
  }
}

export class lpBeaconUpgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save lpBeaconUpgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type lpBeaconUpgraded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("lpBeaconUpgraded", id.toString(), this);
    }
  }

  static load(id: string): lpBeaconUpgraded | null {
    return changetype<lpBeaconUpgraded | null>(
      store.get("lpBeaconUpgraded", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beacon(): Bytes {
    let value = this.get("beacon");
    return value!.toBytes();
  }

  set beacon(value: Bytes) {
    this.set("beacon", Value.fromBytes(value));
  }
}

export class lpUpgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save lpUpgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type lpUpgraded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("lpUpgraded", id.toString(), this);
    }
  }

  static load(id: string): lpUpgraded | null {
    return changetype<lpUpgraded | null>(store.get("lpUpgraded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get implementation(): Bytes {
    let value = this.get("implementation");
    return value!.toBytes();
  }

  set implementation(value: Bytes) {
    this.set("implementation", Value.fromBytes(value));
  }
}

export class betAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save betAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type betAdminChanged must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("betAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): betAdminChanged | null {
    return changetype<betAdminChanged | null>(store.get("betAdminChanged", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousAdmin(): Bytes {
    let value = this.get("previousAdmin");
    return value!.toBytes();
  }

  set previousAdmin(value: Bytes) {
    this.set("previousAdmin", Value.fromBytes(value));
  }

  get newAdmin(): Bytes {
    let value = this.get("newAdmin");
    return value!.toBytes();
  }

  set newAdmin(value: Bytes) {
    this.set("newAdmin", Value.fromBytes(value));
  }
}

export class betBeaconUpgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save betBeaconUpgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type betBeaconUpgraded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("betBeaconUpgraded", id.toString(), this);
    }
  }

  static load(id: string): betBeaconUpgraded | null {
    return changetype<betBeaconUpgraded | null>(
      store.get("betBeaconUpgraded", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get beacon(): Bytes {
    let value = this.get("beacon");
    return value!.toBytes();
  }

  set beacon(value: Bytes) {
    this.set("beacon", Value.fromBytes(value));
  }
}

export class betUpgraded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save betUpgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type betUpgraded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("betUpgraded", id.toString(), this);
    }
  }

  static load(id: string): betUpgraded | null {
    return changetype<betUpgraded | null>(store.get("betUpgraded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get implementation(): Bytes {
    let value = this.get("implementation");
    return value!.toBytes();
  }

  set implementation(value: Bytes) {
    this.set("implementation", Value.fromBytes(value));
  }
}
