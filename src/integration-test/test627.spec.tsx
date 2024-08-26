
import { test, expect } from "@playwright/experimental-ct-react";
import App627 from "../example/App627.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App627 />);
  await expect(component).toContainText("Learn React");
});
