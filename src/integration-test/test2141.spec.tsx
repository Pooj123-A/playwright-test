
import { test, expect } from "@playwright/experimental-ct-react";
import App2141 from "../example/App2141.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2141 />);
  await expect(component).toContainText("Learn React");
});
