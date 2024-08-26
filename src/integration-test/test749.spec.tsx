
import { test, expect } from "@playwright/experimental-ct-react";
import App749 from "../example/App749.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App749 />);
  await expect(component).toContainText("Learn React");
});
