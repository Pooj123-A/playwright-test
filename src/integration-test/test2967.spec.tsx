
import { test, expect } from "@playwright/experimental-ct-react";
import App2967 from "../example/App2967.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2967 />);
  await expect(component).toContainText("Learn React");
});
