
import { test, expect } from "@playwright/experimental-ct-react";
import App879 from "../example/App879.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App879 />);
  await expect(component).toContainText("Learn React");
});
