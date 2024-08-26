
import { test, expect } from "@playwright/experimental-ct-react";
import App741 from "../example/App741.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App741 />);
  await expect(component).toContainText("Learn React");
});
