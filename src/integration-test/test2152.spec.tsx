
import { test, expect } from "@playwright/experimental-ct-react";
import App2152 from "../example/App2152.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2152 />);
  await expect(component).toContainText("Learn React");
});
