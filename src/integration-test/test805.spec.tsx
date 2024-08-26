
import { test, expect } from "@playwright/experimental-ct-react";
import App805 from "../example/App805.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App805 />);
  await expect(component).toContainText("Learn React");
});
