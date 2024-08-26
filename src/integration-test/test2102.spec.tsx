
import { test, expect } from "@playwright/experimental-ct-react";
import App2102 from "../example/App2102.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2102 />);
  await expect(component).toContainText("Learn React");
});
