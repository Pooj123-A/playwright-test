
import { test, expect } from "@playwright/experimental-ct-react";
import App686 from "../example/App686.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App686 />);
  await expect(component).toContainText("Learn React");
});
