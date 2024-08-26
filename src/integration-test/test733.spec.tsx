
import { test, expect } from "@playwright/experimental-ct-react";
import App733 from "../example/App733.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App733 />);
  await expect(component).toContainText("Learn React");
});
