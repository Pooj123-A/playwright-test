
import { test, expect } from "@playwright/experimental-ct-react";
import App324 from "../example/App324.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App324 />);
  await expect(component).toContainText("Learn React");
});
