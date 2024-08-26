
import { test, expect } from "@playwright/experimental-ct-react";
import App742 from "../example/App742.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App742 />);
  await expect(component).toContainText("Learn React");
});
