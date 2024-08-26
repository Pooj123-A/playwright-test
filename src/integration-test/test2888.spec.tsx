
import { test, expect } from "@playwright/experimental-ct-react";
import App2888 from "../example/App2888.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2888 />);
  await expect(component).toContainText("Learn React");
});
