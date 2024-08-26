
import { test, expect } from "@playwright/experimental-ct-react";
import App2270 from "../example/App2270.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2270 />);
  await expect(component).toContainText("Learn React");
});
