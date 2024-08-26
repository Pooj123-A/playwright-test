
import { test, expect } from "@playwright/experimental-ct-react";
import App1466 from "../example/App1466.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1466 />);
  await expect(component).toContainText("Learn React");
});
