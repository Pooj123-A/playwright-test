
import { test, expect } from "@playwright/experimental-ct-react";
import App578 from "../example/App578.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App578 />);
  await expect(component).toContainText("Learn React");
});
