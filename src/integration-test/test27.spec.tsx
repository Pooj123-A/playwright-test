
import { test, expect } from "@playwright/experimental-ct-react";
import App27 from "../example/App27.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App27 />);
  await expect(component).toContainText("Learn React");
});
