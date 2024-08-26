
import { test, expect } from "@playwright/experimental-ct-react";
import App200 from "../example/App200.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App200 />);
  await expect(component).toContainText("Learn React");
});
