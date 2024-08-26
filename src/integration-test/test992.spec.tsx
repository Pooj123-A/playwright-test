
import { test, expect } from "@playwright/experimental-ct-react";
import App992 from "../example/App992.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App992 />);
  await expect(component).toContainText("Learn React");
});
