
import { test, expect } from "@playwright/experimental-ct-react";
import App2099 from "../example/App2099.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2099 />);
  await expect(component).toContainText("Learn React");
});
