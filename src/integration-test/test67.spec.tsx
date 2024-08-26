
import { test, expect } from "@playwright/experimental-ct-react";
import App67 from "../example/App67.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App67 />);
  await expect(component).toContainText("Learn React");
});
