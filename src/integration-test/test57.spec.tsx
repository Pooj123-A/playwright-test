
import { test, expect } from "@playwright/experimental-ct-react";
import App57 from "../example/App57.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App57 />);
  await expect(component).toContainText("Learn React");
});
