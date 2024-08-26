
import { test, expect } from "@playwright/experimental-ct-react";
import App2997 from "../example/App2997.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2997 />);
  await expect(component).toContainText("Learn React");
});
