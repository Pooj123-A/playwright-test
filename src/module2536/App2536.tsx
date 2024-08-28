
import { test, expect } from "@playwright/experimental-ct-react";
import App2536 from "./App2536.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2536 />);
  await expect(component).toContainText("Learn React");
});
