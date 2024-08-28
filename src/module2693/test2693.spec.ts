
import { test, expect } from "@playwright/experimental-ct-react";
import App2693 from "./App2693.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2693 />);
  await expect(component).toContainText("Learn React");
});
