
import { test, expect } from "@playwright/experimental-ct-react";
import App2049 from "../example/App2049.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2049 />);
  await expect(component).toContainText("Learn React");
});
