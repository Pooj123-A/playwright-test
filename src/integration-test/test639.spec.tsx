
import { test, expect } from "@playwright/experimental-ct-react";
import App639 from "../example/App639.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App639 />);
  await expect(component).toContainText("Learn React");
});
