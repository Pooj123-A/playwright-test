
import { test, expect } from "@playwright/experimental-ct-react";
import App415 from "../example/App415.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App415 />);
  await expect(component).toContainText("Learn React");
});
