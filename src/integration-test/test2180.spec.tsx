
import { test, expect } from "@playwright/experimental-ct-react";
import App2180 from "../example/App2180.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2180 />);
  await expect(component).toContainText("Learn React");
});
