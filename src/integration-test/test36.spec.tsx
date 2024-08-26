
import { test, expect } from "@playwright/experimental-ct-react";
import App36 from "../example/App36.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App36 />);
  await expect(component).toContainText("Learn React");
});
