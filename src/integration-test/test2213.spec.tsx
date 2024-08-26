
import { test, expect } from "@playwright/experimental-ct-react";
import App2213 from "../example/App2213.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2213 />);
  await expect(component).toContainText("Learn React");
});
