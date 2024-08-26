
import { test, expect } from "@playwright/experimental-ct-react";
import App2295 from "../example/App2295.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2295 />);
  await expect(component).toContainText("Learn React");
});
