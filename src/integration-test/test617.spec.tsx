
import { test, expect } from "@playwright/experimental-ct-react";
import App617 from "../example/App617.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App617 />);
  await expect(component).toContainText("Learn React");
});
