
import { test, expect } from "@playwright/experimental-ct-react";
import App473 from "../example/App473.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App473 />);
  await expect(component).toContainText("Learn React");
});
