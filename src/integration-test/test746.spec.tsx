
import { test, expect } from "@playwright/experimental-ct-react";
import App746 from "../example/App746.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App746 />);
  await expect(component).toContainText("Learn React");
});
