
import { test, expect } from "@playwright/experimental-ct-react";
import App577 from "../example/App577.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App577 />);
  await expect(component).toContainText("Learn React");
});
