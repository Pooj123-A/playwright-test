
import { test, expect } from "@playwright/experimental-ct-react";
import App703 from "../example/App703.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App703 />);
  await expect(component).toContainText("Learn React");
});
