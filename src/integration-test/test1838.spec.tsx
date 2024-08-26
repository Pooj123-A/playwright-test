
import { test, expect } from "@playwright/experimental-ct-react";
import App1838 from "../example/App1838.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1838 />);
  await expect(component).toContainText("Learn React");
});
