
import { test, expect } from "@playwright/experimental-ct-react";
import App888 from "../example/App888.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App888 />);
  await expect(component).toContainText("Learn React");
});
