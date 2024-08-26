
import { test, expect } from "@playwright/experimental-ct-react";
import App275 from "../example/App275.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App275 />);
  await expect(component).toContainText("Learn React");
});
