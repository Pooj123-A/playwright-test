
import { test, expect } from "@playwright/experimental-ct-react";
import App2729 from "./App2729.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2729 />);
  await expect(component).toContainText("Learn React");
});
