
import { test, expect } from "@playwright/experimental-ct-react";
import App966 from "../example/App966.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App966 />);
  await expect(component).toContainText("Learn React");
});
